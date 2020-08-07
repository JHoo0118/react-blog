using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtensions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder
                .NotEmpty()
                .MinimumLength(6).WithMessage("비밀번호는 최소 6글자 이상으로 설정해 주세요.")
                .Matches("[A-Z]").WithMessage("최소 1개 이상의 대문자 알파벳을 포함해 주세요.")
                .Matches("[a-z]").WithMessage("최소 1개 이상의 소문자 알파벳을 포함해 주세요.")
                .Matches("[0-9]").WithMessage("최소 1개 이상의 숫자를 포함해 주세요.")
                .Matches("[^a-zA-Z0-9]").WithMessage("최소 1개 이상의 특수 문자를 포함해 주세요.");

            return options;
        }
    }
}