import { useParams } from "react-router-dom";

function AskPage() {
  const { askId } = useParams();

  if (!askId) {
    return (
      <>
        <div className='flex flex-col justify-between w-full max-w-3xl'>
          Who are you looking for?
        </div>
      </>
    );
  }
  return (
    <>
      <div className='flex flex-col justify-between w-full max-w-3xl'>
        123
      </div>
    </>
  );
}

export default AskPage;
