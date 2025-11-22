function confirmarExclusao(event) {
    if (!confirm("Deseja realmente apagar este filme?")) {
        event.preventDefault();
    }
}