using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace WebApplication5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly string connectionString = "Data Source=.;Initial Catalog=fee;Integrated Security=True";

        [HttpGet]
        public IActionResult GetAdminData()
        {
            //var adminInformation = new Dictionary<string, string>();
            var admin = new List<Dictionary<string, string>>();
            //int count = 0;

            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var query = "SELECT Admin_id, Admin_Name, Admin_email, Admin_pass, Admin_role FROM Admin";

                using (var command = new SqlCommand(query, connection))
                {
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            var adminInformation = new Dictionary<string, string>();
                            //count++;
                            adminInformation.Add("Admin Id", reader["Admin_id"].ToString());
                            adminInformation.Add("Admin Name", reader["Admin_Name"].ToString());
                            adminInformation.Add("Admin Email", reader["Admin_email"].ToString());
                            adminInformation.Add("Admin Password", reader["Admin_pass"].ToString());
                            adminInformation.Add("Admin Role", reader["Admin_role"].ToString());

                            admin.Add( adminInformation);

                            
                            
                        }
                    }
                }

            }

            return Ok(admin);
        }

        [HttpPut]
        public IActionResult InsertAdmin(int id, string name, string email, string pass, string role)
        {
            var adminInformation = new Dictionary<string, string>();
            int updated;
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                var query = String.Format("INSERT INTO Admin VALUES( @id, @name, @email, @pass, @role )");
                //var query = String.Format("UPDATE Fee set status = {0} where Student_id = {1}", status, id);

                using (var command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@id", id);
                    command.Parameters.AddWithValue("@name", name);
                    command.Parameters.AddWithValue("@email", email);
                    command.Parameters.AddWithValue("@pass", pass);
                    command.Parameters.AddWithValue("@role", role);

                    command.ExecuteNonQuery();
                    updated = command.ExecuteNonQuery();
                }


            }
            return Ok();
        }
    }
}

