using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace WebApplication5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class feeController : ControllerBase
    {
        private readonly string connectionString = "Data Source=.;Initial Catalog=fee;Integrated Security=True";

        [HttpGet]
        public IActionResult GetFeeData()
        {
            var fee = new List<Dictionary<string, string>>();

            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var query = "SELECT Student_id, programme_id, proof_of_payment, transaction_id, date_of_transaction, amount_paid, rem_amount, mode_of_payment FROM Fee";

                using (var command = new SqlCommand(query, connection))
                {
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            var feeInformation = new Dictionary<string, string>();

                            feeInformation.Add("Student Id", reader["Student_id"].ToString());
                            feeInformation.Add("Programme ID", reader["programme_id"].ToString());
                            feeInformation.Add("Proof of Payment", reader["proof_of_payment"].ToString());
                            feeInformation.Add("Transaction Id", reader["transaction_id"].ToString());
                            feeInformation.Add("Date of Transaction", reader["date_of_transaction"].ToString());
                            feeInformation.Add("Amount Paid", reader["amount_paid"].ToString());
                            feeInformation.Add("Rem Amount", reader["proof_of_payment"].ToString());
                            feeInformation.Add("Mode Of Payment", reader["mode_of_payment"].ToString());

                            fee.Add(feeInformation);
                        }
                    }
                }

            }

            return Ok(fee);
        }

        [HttpPut]
        public IActionResult UpdateStatus(int id, string status, string remarks)
        {
            var feeInformation = new Dictionary<string, string>();
            int updated;
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                var query = String.Format("UPDATE Fee set status = @status, remarks = @remarks where Student_id = @id");
                //var query = String.Format("UPDATE Fee set status = {0} where Student_id = {1}", status, id);

                using (var command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@status", status);
                    command.Parameters.AddWithValue("@remarks", remarks);
                    command.Parameters.AddWithValue("@id", id);

                    command.ExecuteNonQuery();
                    updated = command.ExecuteNonQuery();
                }


            }
                return Ok();
        }
    }
}
