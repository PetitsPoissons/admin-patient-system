async function delUserHandler(user_id) {
  const response = await fetch(`/api/users/${user_id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

$("button").click(function() {
  const user_id = $(this).attr('id');
  console.log(user_id);
  delUserHandler(user_id);
});