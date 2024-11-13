function showTab(tabId) {
    // Скрываем все вкладки
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Отображаем выбранную вкладку
    document.getElementById(tabId).classList.add('active');
}
