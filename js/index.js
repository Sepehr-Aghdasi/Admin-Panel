const themeCookieName = "theme";
const themeDark = "dark";
const themeLight = "light";

const body = document.getElementsByTagName("body")[0];

window.addEventListener("load", () => {
      var theme = getCookie(themeCookieName);
      body.classList.add(theme === "" ? themeLight : theme);
});

// save the selected theme LIGHT or DARK
//  document.cookie read the value when loading the page
function setCookie(cname, cvalue, exdays) {
      let d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 100);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                  c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
            }
      }
      return "";
}

function switchTheme() {
      if (body.classList.contains(themeLight)) {
            body.classList.remove(themeLight);
            body.classList.add(themeDark);
            setCookie(themeCookieName, themeDark);
            // e.preventDefault();
      } else {
            body.classList.remove(themeDark);
            body.classList.add(themeLight);
            setCookie(themeCookieName, themeLight);
      }
}

function collapseSidebar() {
      body.classList.toggle("sidebar-expand");
}

window.onclick = function (event) {
      openCloseDropdown(event);
};

function closeAllDropdown() {
      let dropdowns = document.getElementsByClassName("dropdown-expand");
      for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove("dropdown-expand");
      }
}

function openCloseDropdown(event) {
      if (!event.target.matches(".dropdown-toggle")) {
            //
            //Close dropdown when click out of dropdown menu
            //
            closeAllDropdown();
      } else {
            let toggle = event.target.dataset.toggle;
            let content = document.getElementById(toggle);
            if (content.classList.contains("dropdown-expand")) closeAllDropdown();
            else {
                  closeAllDropdown();
                  content.classList.add("dropdown-expand");
            }
      }
}

const primaryColor = "#4834d4";
const warningColor = "#f0932b";
const successColor = "#6ab04c";
const dangerColor = "#eb4d4b";

(function chart() {
      let ctx = document.getElementById("myChart");
      console.log(ctx);
      if (ctx === null) {
            return;
      }
      console.log(ctx);
      ctx.height = 500;
      ctx.width = 500;
      let data = {
            labels: [
                  "فروردین",
                  "اردیبهشت",
                  "خرداد ",
                  "تیر",
                  "مرداد",
                  "شهریور",
                  "مهر",
                  "آبان",
                  "آذر",
                  "دی",
                  "بهمن",
                  "اسفند",
            ],
            datasets: [
                  {
                        fill: false,
                        label: "میزان فروش",
                        borderColor: successColor,
                        data: [120, 115, 130, 100, 123, 85, 69, 56, 78, 23, 100, 47, 120],
                        borderWidth: 2,
                        // lineTension: 0,
                  },
                  {
                        fill: false,
                        label: "کاهش فروش",
                        borderColor: dangerColor,
                        data: [66, 44, 12, 48, 99, 56, 78, 23, 100, 22, 47],
                        borderWidth: 2,
                        // lineTension: 0,
                  },
            ],
      };

      let lineChart = new Chart(ctx, {
            type: "line",
            data: data,
            options: {
                  maintainAspectRatio: false,
                  bezierCurve: false,
            },
      });
      // View Chart chartjs
      // Doughnut chart
      let chartView = document.getElementById("chartView").getContext("2d");
      let myChart = new Chart(chartView, {
            type: "doughnut",
            data: {
                  labels: ["شب", "عصر", "ظهر", "صبح"],
                  datasets: [
                        {
                              data: [5, 8, 12, 18],
                              backgroundColor: ["#00e676", "#ff5722", "#1e88e5", "#ffd600"],
                              borderWidth: 0.5,
                              borderColor: "#ddd",
                        },
                  ],
            },
            options: {
                  title: {
                        display: true,
                        position: "top",
                        fontSize: 16,
                        fontColor: "#111",
                        padding: 15,
                  },
                  legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                              boxWidth: 100,
                              fontColor: "#111",
                              padding: 15,
                        },
                  },
                  tooltips: {
                        enabled: false,
                  },
                  plugins: {
                        datalabels: {
                              color: "#111",
                              textAlign: "center",
                              font: {
                                    lineHeight: 1.6,
                              },
                              formatter: function (value, chartView) {
                                    return (
                                          chartView.chart.data.labels[chartViem.dataIndex] +
                                          "\n" +
                                          value +
                                          "%"
                                    );
                              },
                        },
                  },
            },
      });
})();

// Accordion Area
let accordion = document.getElementsByClassName("accordionName");

for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
            let panel = this.nextElementSibling;
            if (panel.style.height) {
                  panel.style.height = null;
            } else {
                  panel.style.height = panel.scrollHeight + "px";
            }
      });
}
