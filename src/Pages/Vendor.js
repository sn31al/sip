import { useId, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function AddProfile() {
  const inputref = useRef();
  const pdfinputref = useRef();
  const Userjwt = useId();
  const [blobimg, setblogimg] = useState({ image: null });
  const [Path, setPath] = useState();
  const [pdfPath, setpdfPath] = useState();
  const [uploadPDF, setUploadPDF] = useState();
  const [uploadimage, setuploadimage] = useState({ img: "" });
  const [profileCard, setProfileCard] = useState({
    Name: "",
    Phone: "",
    Field: "",
    Gender: "",
    Email: "",
    Password: "",
    ConfimPassword: "",
    Price: "",
    SocialLink: "",
    PdfLink: "",
    Paths: "",
  });
  const navigate = useNavigate();
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setblogimg(URL.createObjectURL(file));
    setuploadimage(file);
  };

  const handleFileChange = (e) => {
    setUploadPDF(e.target.files[0]);
    setpdfPath(e.target.files[0]);
  };
  console.log(Path, pdfPath);
  const savePDFToCloud = async () => {
    if (uploadPDF) {
      const storageRef = ref(storage, `${Userjwt}/${uploadPDF.name}`);
      const uploadTask = uploadBytesResumable(storageRef, uploadPDF);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          if (snapshot) return;
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((path) => {
            setProfileCard({ ...profileCard, PdfLink: path });
          });
        }
      );
    }
  };

  const SaveImageToCloud = async () => {
    if (uploadimage) {
      const Storeref = ref(storage, `${Userjwt}/${uploadimage.name}`);
      const Upload = uploadBytesResumable(Storeref, uploadimage);
      Upload.on(
        "state_change",
        (snap) => {
          if (snap) return;
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(Upload.snapshot.ref).then((path) => {
            setPath(path);
          });
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await savePDFToCloud();
      await SaveImageToCloud();
      if (profileCard.PdfLink !== "") {
        await setDoc(doc(db, "VendorLive", Userjwt), profileCard);
        localStorage.setItem("UserName", profileCard.Name);
        alert("Sucess :)");
        navigate("/dashboard");
      } else {
        alert("loading....");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="px-16 py-8 overflow-y-scroll bg-white rounded-xl">
          <div className="text-center text-4xl text-[#1c4980] font-semibold">
            <h1>Welcome!</h1>
          </div>
          <form className="max-w-md mx-auto my-10">
            <div className="flex items-center space-x-10">
              <div className="flex flex-col space-y-1.5">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={profileCard.Name}
                  className="border-[1.5px] border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                  onChange={(e) => {
                    setProfileCard({ ...profileCard, Name: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="@gmail.com"
                  required
                  value={profileCard.Email}
                  className="border-[1.5px] border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                  onChange={(e) => {
                    setProfileCard({ ...profileCard, Email: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="flex items-center my-10 space-x-10">
              <div className="flex flex-col space-y-1.5">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="91+"
                  required
                  value={profileCard.Phone}
                  className="border-[1.5px] border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                  onChange={(e) => {
                    setProfileCard({ ...profileCard, Phone: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label>Gender</label>
                <input
                  type="text"
                  placeholder="Gender"
                  required
                  value={profileCard.Gender}
                  className="border-[1.5px] border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                  onChange={(e) => {
                    setProfileCard({ ...profileCard, Gender: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="flex items-center my-10 space-x-10">
              <div className="flex flex-col space-y-1.5">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Minimun 8 letters"
                  required
                  value={profileCard.Password}
                  className="border-[1.5px] border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                  onChange={(e) => {
                    setProfileCard({
                      ...profileCard,
                      Password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label>Confim Password</label>
                <input
                  type="text"
                  placeholder="Confim Password"
                  required
                  value={profileCard.ConfimPassword}
                  className="border-[1.5px] border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                  onChange={(e) => {
                    setProfileCard({
                      ...profileCard,
                      ConfimPassword: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="my-10 ">
              <div className="flex flex-col justify-center space-y-1.5">
                <label>Categeory</label>
                <select
                  value={profileCard.Field}
                  onChange={(e) => {
                    setProfileCard({
                      ...profileCard,
                      Field: e.target.value,
                    });
                  }}
                  className="border-[1.5px] w-[37vw] mx-auto border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                >
                  <option value=""></option>
                  <option value="PhotoGraphy">Photography</option>
                  <option value="Lights">Lights</option>
                  <option value="Sounds">Sounds</option>
                  <option value="Decor">Decor</option>
                  <option value="Catering">Catering</option>
                </select>
              </div>
            </div>
            <div className="my-10 ">
              <div className="flex flex-col justify-center space-y-1.5">
                <label>image Link</label>
                <input
                  type="text"
                  placeholder="Upload image"
                  required
                  value={profileCard.Paths}
                  className="border-[1.5px] w-[37vw] mx-auto border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                  onChange={(e) => {
                    setProfileCard({ ...profileCard, Paths: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="my-10 ">
              <div className="flex flex-col justify-center space-y-1.5">
                <label>Price</label>
                <input
                  value={profileCard.Price}
                  onChange={(e) => {
                    setProfileCard({
                      ...profileCard,
                      Price: e.target.value,
                    });
                  }}
                  className="border-[1.5px] w-[37vw] mx-auto border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center space-y-1.5 my-10">
                <label>Social Links</label>
                <input
                  type="text"
                  className="border-[1.5px] w-[37vw] mx-auto border-slate-500 px-10 outline-none py-2.5 rounded-lg"
                  value={profileCard.SocialLink}
                  onChange={(e) => {
                    setProfileCard({
                      ...profileCard,
                      SocialLink: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex gap-x-8 items-center text-center">
                <div className="flex flex-col items-center justify-center ml-32">
                  <FiUploadCloud
                    onClick={() => {
                      inputref.current.click();
                    }}
                    size={65}
                    color="grey"
                    className={` ${
                      blobimg.image !== null ? "hidden" : null
                    }  my-3`}
                  />
                  <input
                    type="file"
                    placeholder="Image"
                    required
                    value={profileCard.Path}
                    onChange={handleImageUpload}
                    hidden
                    ref={inputref}
                  />
                  {blobimg.image !== null ? (
                    <img
                      src={blobimg}
                      className={` ${
                        blobimg ? "block" : "hidden"
                      }  max-w-[40vw] sm:max-w-[17vw] mx-auto`}
                      alt=""
                    />
                  ) : null}
                  <p className="text-sm text-slate-500">
                    Upload Verification Certificate
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center ml-32">
                  <AiOutlineFilePdf
                    onClick={() => {
                      pdfinputref.current.click();
                    }}
                    size={65}
                    color="grey"
                    className={`my-6`}
                  />
                  <input
                    type="file"
                    placeholder="Image"
                    required
                    accept=".pdf"
                    hidden
                    value={profileCard.pdf}
                    onChange={handleFileChange}
                    ref={pdfinputref}
                  />
                  {uploadPDF?.name}
                  <p className="text-sm text-slate-500">
                    {uploadPDF ? uploadPDF.name : "Upload business Details"}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 w-[37vw] mx-auto text-white font-semibold px-10 outline-none py-2.5 rounded-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
