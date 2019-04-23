using Microsoft.EntityFrameworkCore.Migrations;

namespace ML.Data.PostgreSQL.Migrations
{
    public partial class Added_Double_Instead_Decimal_For_Trackcost : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Cost",
                table: "Tracks",
                nullable: false,
                oldClrType: typeof(decimal));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Cost",
                table: "Tracks",
                nullable: false,
                oldClrType: typeof(double));
        }
    }
}
