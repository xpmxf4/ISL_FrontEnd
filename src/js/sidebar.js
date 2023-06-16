const toggleButton = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const worldMap = document.getElementById('worldMap');

export function toggleSidebar() {
    sidebar.classList.toggle("open")
    overlay.classList.toggle("show")
    worldMap.classList.toggle("dimmed")
}

toggleButton.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);