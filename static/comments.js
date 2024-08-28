/* jshint esversion: 11 */

const editButtons = document.getElementsByClassName("btn-edit");
const commentText = document.getElementById("id_body");
const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");

const deleteModalElement = document.getElementById("deleteModal");
if (deleteModalElement) {
  const deleteModal = new bootstrap.Modal(deleteModalElement);
}
const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteConfirm = document.getElementById("deleteConfirm");

// Check if edit buttons exist before adding event listeners
if (editButtons.length > 0) {
  for (let button of editButtons) {
    button.addEventListener("click", (e) => {
      let commentId = e.target.getAttribute("comment_id");
      let commentContent = document.getElementById(`comment${commentId}`).innerText;
      commentText.value = commentContent;
      submitButton.innerText = "Update";
      commentForm.setAttribute("action", `edit_comment/${commentId}`);
    });
  }
}

// Check if delete buttons exist before adding event listeners
if (deleteButtons.length > 0) {
  for (let button of deleteButtons) {
    button.addEventListener("click", (e) => {
      let commentId = e.target.getAttribute("comment_id");
      deleteConfirm.href = `delete_comment/${commentId}`;
      if (deleteModal) {
        deleteModal.show();
      }
    });
  }
}