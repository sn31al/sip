import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../Firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { FiUploadCloud } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function AddProfile({ setUpload }) {
  const inputref = useRef();
  const Userjwt = localStorage.getItem("UserJwt");
  const [blobimg, setblogimg] = useState({ image: null });
  const [Path, setPath] = useState();
  const [uploadimage, setuploadimage] = useState({ img: "" });
  const [profileCard, setProfileCard] = useState({
    Name: "",
    Phone: "",
    Field: "",
    Location: "",
    About: "",
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setblogimg(URL.createObjectURL(file));
    setuploadimage(file);
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
      if (Object.values(profileCard).every((i) => i !== "")) {
        await SaveImageToCloud();
        await setDoc(doc(db, "VendorLive", Userjwt), profileCard);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Path) {
      updateDoc(doc(db, `VendorLive/${Userjwt}`), { Path: Path });
    }
  }, [Path, Userjwt]);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center h-full overflow-y-scroll bg-black bg-opacity-75 scroll-smooth">
        <div className="px-16 py-8 overflow-y-scroll bg-white rounded-xl">
          <div className="flex justify-end ">
            <RxCross2
              size={30}
              color="grey"
              cursor={"pointer"}
              onClick={() => {
                setUpload(false);
              }}
            />
          </div>
          <form className="flex flex-col items-center justify-center space-y-8">
            <div className="cursor-pointer">
              <FiUploadCloud
                onClick={() => {
                  inputref.current.click();
                }}
                size={65}
                color="grey"
                className={` ${blobimg.image !== null ? "hidden" : null} `}
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
            </div>
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                value={profileCard.Name}
                className="bg-slate-100 px-10 outline-none py-2.5 rounded-lg"
                onChange={(e) => {
                  setProfileCard({ ...profileCard, Name: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Contact Number"
                required
                value={profileCard.Phone}
                className="bg-slate-100 px-10 outline-none py-2.5 rounded-lg"
                onChange={(e) => {
                  setProfileCard({ ...profileCard, Phone: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Field"
                required
                value={profileCard.Field}
                className="bg-slate-100 px-10 outline-none py-2.5 rounded-lg"
                onChange={(e) => {
                  setProfileCard({ ...profileCard, Field: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Location"
                required
                value={profileCard.Location}
                className="bg-slate-100 px-10 outline-none py-2.5 rounded-lg"
                onChange={(e) => {
                  setProfileCard({ ...profileCard, Location: e.target.value });
                }}
              />
            </div>
            <div>
              <textarea
                rows="2"
                cols="22"
                type="text"
                value={profileCard.About}
                placeholder="About"
                required
                className="bg-slate-100 px-10 outline-none py-2.5 rounded-md"
                onChange={(e) => {
                  setProfileCard({ ...profileCard, About: e.target.value });
                }}
              />
            </div>
            <Link to={`/profile/${Userjwt}`}>
              <button
                className="bg-black text-white px-20 py-1.5 rounded-full"
                onClick={handleSubmit}
              >
                <Link to={`/profile/${Userjwt}`}>Done</Link>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
