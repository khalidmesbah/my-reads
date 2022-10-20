import Swal from "sweetalert2";

const usersTokens = localStorage?.getItem("usersTokens");
if (!usersTokens) {
  localStorage.setItem(
    "usersTokens",
    JSON.stringify({
      KhalidMesbah: localStorage.token,
    })
  );
}

const addUser = (email) => {
  const usersTokens = JSON.parse(localStorage.getItem("usersTokens"));
  usersTokens[email] = Math.random().toString(36).substr(-8);
  if (localStorage.token === "undefined")
    localStorage.token = usersTokens[email];
  localStorage.setItem("usersTokens", JSON.stringify(usersTokens));
};

const getCurrentUser = () => {
  const usersTokens = JSON.parse(localStorage.getItem("usersTokens"));
  return Object.keys(usersTokens).find(
    (user) => usersTokens[user] === localStorage.token
  );
};

const getUsers = () => {
  const usersTokens = JSON.parse(localStorage.getItem("usersTokens"));
  return Object.keys(usersTokens);
};

const deleteUser = () => {
  let promise = new Promise((resolve, reject) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ms-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const usersTokens = JSON.parse(localStorage.getItem("usersTokens"));
          delete usersTokens[getCurrentUser()];
          localStorage.setItem("usersTokens", JSON.stringify(usersTokens));
          setCurrentUser(getUsers()[0]);
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
        resolve(result.isConfirmed);
      });
  });

  return promise;
};

const setCurrentUser = (email) => {
  const usersTokens = JSON.parse(localStorage.getItem("usersTokens"));
  localStorage.token = usersTokens[email];
};

export { addUser, getCurrentUser, getUsers, setCurrentUser, deleteUser };
