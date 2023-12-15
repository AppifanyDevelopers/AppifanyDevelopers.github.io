// sorting tabele row
const ctx = document.getElementById('myChart');
  
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3,6],
        borderColor: '#F8B097', // Red color for the line
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Dataset 2',
        data: [5, 8, 14, 10, 20, 15,8],
        borderColor: '#163451', // Blue color for the line
        borderWidth: 1,
        fill: false
      }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function sortTable(columnIndex) {
    const table = document.getElementById("myTable");
    const rows = Array.from(table.getElementsByTagName("tr"));
    const isNumeric = columnIndex === 1; // Check if the column is numeric
  
    rows.shift(); // Remove the table header row
  
    rows.sort((a, b) => {
      const aValue = isNumeric ? parseFloat(a.getElementsByTagName("td")[columnIndex].innerText) : a.getElementsByTagName("td")[columnIndex].innerText;
      const bValue = isNumeric ? parseFloat(b.getElementsByTagName("td")[columnIndex].innerText) : b.getElementsByTagName("td")[columnIndex].innerText;
      
      return isNumeric ? aValue - bValue : aValue.localeCompare(bValue);
    });
  
    // Reorder the table rows based on the sorted data
    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Clear the current table body
  
    rows.forEach(row => {
      tbody.appendChild(row);
    });
  }