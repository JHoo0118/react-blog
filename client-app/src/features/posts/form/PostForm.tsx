import React, {
  useContext,
  FormEvent,
  useState,
  useEffect,
  useCallback,
} from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../../app/stores/rootStore";
import { PostFormValues } from "../../../app/models/post";
import { v4 as uuid } from "uuid";
import { RouteComponentProps } from "react-router-dom";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../../../app/common/form/TextInput";
import SelectInput from "../../../app/common/form/SelectInput";
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthBetween,
} from "revalidate";
import ReactMarkdown from "react-markdown";
import TextAreaInput from "../../../app/common/form/TextAreaInput";
import { useDropzone } from "react-dropzone";
import { Icon } from "semantic-ui-react";
import InlineCodeBlock from "../../../components/InlineCodeBlock";
import CodeBlock from "../../../components/ReactSyntaxHighlighter";
const validate = combineValidators({
  title: composeValidators(
    isRequired({ message: "필수 입력 항목입니다." }),
    hasLengthBetween(
      1,
      35
    )({ message: "최소 2글자, 최대 34글자로 작성해 주세요." })
  )(),
  description: composeValidators(
    isRequired({ message: "필수 입력 항목입니다." }),
    hasLengthBetween(
      5,
      151
    )({ message: "최소 6글자, 최대 150글자로 작성해 주세요." })
  )(),
  content: composeValidators(
    isRequired({ message: "필수 입력 항목입니다." })
  )(),
  // thumbnail: isRequired({ message: "필수 입력 항목입니다." }),
  category: isRequired({ message: "필수 입력 항목입니다." }),
});

interface DetailParams {
  id: string;
}

const dropzoneStyles = {
  border: "dashed 3px",
  borderColor: "#eee",
  borderRadius: "5px",
  paddingTop: "35px",
  textAlign: "center" as "center",
};

const dropzoneActive = {
  borderColor: "green",
};

const PostForm: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const rootStore = useContext(RootStoreContext);
  const {
    loadPost,
    createPost,
    editPost,
    submitting,
    editPostNoEditImage,
  } = rootStore.postStore;

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState("first");
  const [post, setPost] = useState(new PostFormValues());
  const [files, setFiles] = useState<any[]>([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file: object) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  useEffect(() => {
    if (match.params.id) {
      setLoading(true);
      loadPost(match.params.id)
        .then((post) => setPost(new PostFormValues(post)))
        .finally(() => setLoading(false));
    }
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [loadPost, match.params.id, files]);

  const handleFinalFormSubmit = (values: any) => {
    const { ...post } = values;
    if (!post.id) {
      let newPost = {
        ...post,
        id: uuid(),
      };
      createPost(newPost, files[0]);
    } else {
      if (files[0]) {
        editPost(post, files[0]);
      } else {
        editPostNoEditImage(post);
      }
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget;
    setPost({ ...post, [name]: value });
  };

  return (
    <div
      className={
        "post__form__container " +
        (page === "first" ? "post__form__container-primary--bg" : "")
      }
    >
      <div
        className={
          "post__form__box " +
          (page === "first" ? "post__form__box__primary" : "")
        }
      >
        <FinalForm
          validate={validate}
          initialValues={post}
          onSubmit={handleFinalFormSubmit}
          render={({ handleSubmit, invalid }) => (
            <form
              className={
                "post__form " + (page === "second" ? "post__form__primary" : "")
              }
              onSubmit={handleSubmit}
            >
              {page === "first" && (
                <>
                  <div className="post__form__body-primary">
                    <span
                      className="btn-text btn-text--next margin-right-sm"
                      onClick={() => setPage("second")}
                    >
                      다음으로 <span>&rarr;</span>
                    </span>
                    <Field
                      placeholder="제목을 입력해 주세요."
                      name="title"
                      value={post.title}
                      component={TextInput}
                      inputOnChange={handleInputChange}
                    />
                    <Field
                      placeholder="설명을 입력해 주세요."
                      name="description"
                      rows={3}
                      value={post.description}
                      component={TextAreaInput}
                      style={{ backgroundColor: "#fff", color: "#000" }}
                      inputOnChange={handleInputChange}
                    />

                    <Field
                      placeholder="카테고리"
                      name="category"
                      value={post.category}
                      component={SelectInput}
                      inputOnChange={handleInputChange}
                    />

                    <div className="post__form__thumbnail">
                      <div
                        className="post__form--upload"
                        {...getRootProps()}
                        style={
                          isDragActive
                            ? { ...dropzoneStyles, ...dropzoneActive }
                            : dropzoneStyles
                        }
                      >
                        <input {...getInputProps()} />
                        <Icon name="upload" size="huge" />
                        <h2 className="profile__photo__body--text--1">
                          이미지를 드래그 해주세요!
                          <br />
                          혹은 클릭!
                        </h2>
                      </div>

                      <div className="post__form--preview">
                        {files && (
                          <img
                            className="post__form--preview--img"
                            src={files[0]?.preview}
                            alt="미리보기"
                            style={
                              files.length === 0 ? { display: "none" } : {}
                            }
                          />
                        )}
                        {post && post.thumbnail && files.length === 0 && (
                          <img
                            className="post__form--preview--img"
                            src={post.thumbnail.url}
                            alt="미리보기"
                            style={
                              post.thumbnail.url === ""
                                ? { display: "none" }
                                : {}
                            }
                          />
                        )}
                      </div>
                    </div>

                    <div className="btn-group--page--1 margin-top-xl">
                      <button
                        className="btn btn--cancel"
                        disabled={loading}
                        onClick={
                          post.id
                            ? () => history.push(`/posts/${post.id}`)
                            : () => history.push("/posts")
                        }
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </>
              )}

              {page === "second" && (
                <div>
                  <span
                    className="btn-text btn-text--prev"
                    onClick={() => setPage("first")}
                    style={{ right: "2rem" }}
                  >
                    <span>&larr;</span>&nbsp;이전으로
                  </span>
                  <Field
                    name="content"
                    placeholder="내용을 자유롭게 입력해 주세요."
                    value={post.content}
                    rows={56}
                    component={TextAreaInput}
                    inputOnChange={handleInputChange}
                  />

                  <div className="btn-group--page--2 margin-bottom-md">
                    <button
                      type="submit"
                      className={
                        "btn btn--blue margin-right-sm " +
                        (loading ||
                        invalid ||
                        (post.thumbnail.url === "" && files.length === 0)
                          ? "disabled"
                          : "")
                      }
                      disabled={
                        loading ||
                        invalid ||
                        (post.thumbnail.url === "" && files.length === 0)
                      }
                    >
                      {submitting && (
                        <i className="fas fa-circle-notch fa-spin loading"></i>
                      )}
                      출간하기
                    </button>
                    <button
                      disabled={loading}
                      className="btn btn--cancel"
                      onClick={
                        post.id
                          ? () => history.push(`/posts/${post.id}`)
                          : () => history.push("/posts")
                      }
                    >
                      취소
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        />
      </div>
      {page === "second" && (
        <div className="post__form__markdown">
          <ReactMarkdown
            source={post.content}
            escapeHtml={false}
            renderers={{ code: CodeBlock, inlineCode: InlineCodeBlock }}
          />
        </div>
      )}
    </div>
  );
};

export default observer(PostForm);
