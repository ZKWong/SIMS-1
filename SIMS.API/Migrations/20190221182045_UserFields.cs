using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SIMS.API.Migrations
{
    public partial class UserFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "BachelorGradDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "BachelorProjectTitle",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "BachelorStartDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "BachelorThesisTitle",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CommFormedDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "CurrentAcademicLevel",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CurrentProgram",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateAcceptedForCandidacy",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DegreeProgram",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Dissertation",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DissertationDefenseDate",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DissertationTitle",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "DoctoralCandidate",
                table: "Users",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DoctorateGradDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "MasterDefenseDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "MasterFocus",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "MasterGraduationDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "MasterProjectTitle",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "MasterStartDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "MasterThesisTitle",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber1",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber2",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BachelorGradDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "BachelorProjectTitle",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "BachelorStartDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "BachelorThesisTitle",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CommFormedDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CurrentAcademicLevel",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CurrentProgram",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DateAcceptedForCandidacy",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DegreeProgram",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Dissertation",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DissertationDefenseDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DissertationTitle",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DoctoralCandidate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DoctorateGradDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MasterDefenseDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MasterFocus",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MasterGraduationDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MasterProjectTitle",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MasterStartDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MasterThesisTitle",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PhoneNumber1",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PhoneNumber2",
                table: "Users");
        }
    }
}
