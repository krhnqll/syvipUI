using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using syvipUI.Models;
namespace syvipUI.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult DashboardIndex()
        {
            return View();
        }

        public IActionResult Reservations()
        {
            return View();
        }
        public IActionResult Settings()
        {
            return View();
        }
    }
}
