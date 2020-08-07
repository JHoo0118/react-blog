using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class RefreshTokens : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: new Guid("1fc5b374-f789-4506-a763-e85d75170cbb"));

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: new Guid("f8373889-3197-4ee8-9b31-bfe6d9d88fdc"));

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: new Guid("feeb9127-bc8e-4ea2-8953-ce8c9ae50136"));

            migrationBuilder.AddColumn<string>(
                name: "RefreshToken",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "RefreshTokenExpiry",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("f641e3f3-e2a3-4ef8-a5a4-0bcae3a8850e"), "Value 101" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("61509b5e-a9fc-494a-bb48-52b7ecb3f670"), "Value 102" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("3a7acc50-c61d-4d6e-b19e-f0c200c5a04e"), "Value 103" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: new Guid("3a7acc50-c61d-4d6e-b19e-f0c200c5a04e"));

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: new Guid("61509b5e-a9fc-494a-bb48-52b7ecb3f670"));

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: new Guid("f641e3f3-e2a3-4ef8-a5a4-0bcae3a8850e"));

            migrationBuilder.DropColumn(
                name: "RefreshToken",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RefreshTokenExpiry",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("f8373889-3197-4ee8-9b31-bfe6d9d88fdc"), "Value 101" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("feeb9127-bc8e-4ea2-8953-ce8c9ae50136"), "Value 102" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("1fc5b374-f789-4506-a763-e85d75170cbb"), "Value 103" });
        }
    }
}
