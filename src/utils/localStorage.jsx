import Swal from "sweetalert2";

export const loadInstallList = () => {
  try {
    const data = localStorage.getItem("installation");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

//save
export const updatedLest = (app) => {
  const installation = loadInstallList();

  try {
    const isDuplicate = installation.some((a) => a.id === app.id);
    if (isDuplicate) return alert("Already installed ");
    const updatedInstallList = [...installation, app];
    localStorage.setItem("installation", JSON.stringify(updatedInstallList));
  } catch (err) {
    console.log(err);
  }
};

// remove
export const removeFromInstallation = (id) => {
  const installation = loadInstallList();

  try {
    const updatedInstallList = installation.filter((p) => p.id !== id);

    localStorage.setItem("installation", JSON.stringify(updatedInstallList));
  } catch (err) {
    console.log(err);
  }
};
