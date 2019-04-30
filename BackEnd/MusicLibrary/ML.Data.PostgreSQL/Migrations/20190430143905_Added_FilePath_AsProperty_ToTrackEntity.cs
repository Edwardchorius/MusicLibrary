using Microsoft.EntityFrameworkCore.Migrations;

namespace ML.Data.PostgreSQL.Migrations
{
    public partial class Added_FilePath_AsProperty_ToTrackEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FilePath",
                table: "Tracks",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FilePath",
                table: "Tracks");
        }
    }
}
