using Microsoft.EntityFrameworkCore.Migrations;

namespace ML.Data.PostgreSQL.Migrations
{
    public partial class AddedPropertyNameToTrackEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Tracks",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Tracks");
        }
    }
}
