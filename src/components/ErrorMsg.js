export function ErrorMsg({ error }) {
  if(error){
    return (
        <>  
            <div className=" bg-[#ff33336d] border-2 border-[#ff3333d9] text-white font-roboto text-base px-2 py-1 rounded text-center">
                {error}
            </div>
        </>
    );
  }
}
