export default function json2html(data) {
  // Extract the unique keys to create the header
  const columns = [...new Set(data.flatMap(Object.keys))];

  // Start building the HTML table as a string
  let html = `<table data-user="kskavya1809@gmail.com">`;

  // Create the header
  html += "<thead><tr>";
  columns.forEach(col => {
    html += `<th>${col}</th>`;
  });
  html += "</tr></thead>";

  // Create the body
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>";
    columns.forEach(col => {
      html += `<td>${row[col] || ""}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody></table>";

  return html;
}
