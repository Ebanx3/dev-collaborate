import { uploadNewAvatar } from "@api/uploadAvatar";

export const UploadAvatar = ({setAvatar}:{setAvatar:(s:string)=>void}) => {

  const handleChange = async (file: File) => {
    const res = await uploadNewAvatar(file)
    if(res){
      setAvatar(res)
    }
  }

  return (
    <div className="absolute inset-0 h-full w-full bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
      <label
        htmlFor="uploadAvatar"
        className="opacity-0 group-hover:opacity-100 bg-stone-600 hover:bg-stone-500 p-2 rounded-lg transition-opacity duration-300 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-photo-up"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 8h.01" />
          <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
          <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.5 3.5" />
          <path d="M14 14l1 -1c.679 -.653 1.473 -.829 2.214 -.526" />
          <path d="M19 22v-6" />
          <path d="M22 19l-3 -3l-3 3" />
        </svg>
        <input
          type="file"
          name="uploadAvatar"
          id="uploadAvatar"
          hidden
          onChange={async (e) => {
            if(e.target.files != null)
              handleChange(e.target.files[0]);
          }}
        />
      </label>
    </div>
  );
};
