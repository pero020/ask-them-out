import React from 'react';
import Spinner from '../components/Spinner';

interface FormData {
  name: string,
  message: string
}

function LandingPage() {
  const [askData, setAskData] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(false)
  const [showCopyToast, setShowCopyToast] = React.useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true)

    const target = event.target as typeof event.target & {
      name: { value: string };
      message: { value: string };
    };

    const formData: FormData = {  
      name: target.name.value.replace("-", " ") ,
      message: target.message.value,
    };

    try {
      const response = await fetch(import.meta.env.VITE_HTTP_URL + "/createNewAsk", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const resData = await response.json()
      setAskData(resData.item)

    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setLoading(false)
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`${import.meta.env.VITE_FRONTEND_URL}/ask/${askData.Id}`)
    setShowCopyToast(true)
    setTimeout(() => {
      setShowCopyToast(false)
    }, 4000)
  }

  return (
    <>
      <div className="hero min-h-screen mb-16">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-2 text-center">Welcome to AskTM</h1>
            <p className="text-lg text-gray-600 mb-6 text-center">Here to help a bro out</p>
            <div className="flex flex-col gap-2 items-center">
              <button className="btn btn-wide btn-primary" onClick={() => {
                  let modal = document.getElementById('my_modal_1') as HTMLDialogElement
                  modal.showModal()
                }}>
                Get your personalised link
              </button>
              <a href="#about-section">
                <button className="btn btn-alt w-fit" >
                  How does it work?
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="about-section" className="min-h-screen my-16 sm:mx-24 mx-4">
        <ul className="timeline timeline-snap-icon max-sm:timeline-compact timeline-vertical">
          <li className="min-h-[60vh]">
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start !self-start max-sm:text-start sm:text-end w-full">
              <time className="font-mono italic">Step 1</time>
              <h2 className="text-4xl font-black mb-2">Get Your Link</h2>
              <div className="divider" />
              <p className="text-lg">Write them a <b>Personalised Message</b> for whatever your question may be.</p>
              <div className="divider" />
              <p className="text-lg mb-16"> Copy and <b>Save the Link</b>, eg. <br/><i>"https://ask-them-out.com/ask/Lucy-123"</i></p>
            </div>
            <hr/>
          </li>
          <li className="min-h-[60vh]">
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end !self-start text-start mb-10 w-full">
              <time className="font-mono italic">Step 2</time>
              <h2 className="text-4xl font-black mb-2">Be a Bit Brave</h2>
              <div className="divider" />
              <p className="text-lg">Usually you need to be very brave, but with <b>AskTM</b> just a little, because the message is completely <b className="text-nowrap">Risk Free</b>.</p>
              <div className="divider mt-8">Today</div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Your avatar" src="chad-img.png" />
                  </div>
                </div>
                <div className="chat-header">
                  Chad
                  <time className="text-xs opacity-50"> 12:45</time>
                </div>
                <div className="chat-bubble">Heyy</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Your avatar" src="chad-img.png" />
                  </div>
                </div>
                <div className="chat-bubble">https://ask-them-out.com/ask/Lucy-123</div>
                <div className="chat-footer opacity-50">
                  Delivered
                </div>
              </div>
            </div>
            <hr/>
          </li>
          <li className="min-h-[60vh]">
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start !self-start max-sm:text-start sm:text-end mb-10 w-full">
              <time className="font-mono italic">Step 3</time>
              <h2 className="text-4xl font-black mb-2">The Waiting Game</h2>
              <div className="divider" />
              <p className="text-lg mb-8">Whatever happens, you always profit.</p>
              <div className="flex w-full flex-col lg:flex-row text-white mb-16">
                <div className="flex-grow card bg-success rounded-box place-items-center">If she says <b>YES</b> Congratulations, You did it!</div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="flex-grow card bg-error rounded-box place-items-center">If she says <b>NO</b> It seems like a funny joke.</div>
              </div>
            </div>
            <hr/>
          </li>
          <li className="min-h-[60vh] mb-8">
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end !self-start text-start mb-10 w-full">
              <time className="font-mono italic">Step 4</time>
              <h2 className="text-4xl font-black mb-2">Profit</h2>
              <div className="divider mt-8">Today</div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt=">our avatar" src="chad-img.png" />
                  </div>
                </div>
                <div className="chat-header">
                  Chad
                  <time className="text-xs opacity-50"> 12:45</time>
                </div>
                <div className="chat-bubble">Heyy</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Your avatar" src="chad-img.png" />
                  </div>
                </div>
                <div className="chat-bubble">https://ask-them-out.com/ask/Lucy-123</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Their avatar" src="goth-img.png" />
                  </div>
                </div>
                <div className="chat-header">
                  Goth girl
                  <time className="text-xs opacity-50"> 12:47</time>
                </div>
                <div className="chat-bubble">Wow that was so cool!</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Their avatar" src="goth-img.png" />
                  </div>
                </div>
                <div className="chat-bubble">See you tonight at 8pm &lt;3</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Your avatar" src="chad-img.png" />
                  </div>
                </div>
                <div className="chat-header">
                  Chad
                  <time className="text-xs opacity-50"> 19:59</time>
                </div>
                <div className="chat-bubble">Nice</div>
                <div className="chat-footer opacity-50">
                  Delivered
                </div>
              </div>
            </div>
            <hr/>
          </li>
        </ul>
      </div>
      <div className="hero min-h-screen my-16">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-8 text-center">Let's get started</h2>
            <div className="flex flex-col gap-2 items-center">
            <button className="btn btn-wide btn-primary" onClick={() => {
                  let modal = document.getElementById('my_modal_1') as HTMLDialogElement
                  modal.showModal()
                }}>
                Get your personalised link
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
      <div className="modal-box w-full max-w-4xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {loading ? <Spinner/> : askData ? <>
          <h3 className="font-bold text-3xl mb-4">Your personalised link for <i>{askData.name}</i>:</h3>
          <div className='card bg-secondary rounded-box place-items-center overflow-auto'>
            <button 
              className="btn btn-sm btn-alt absolute right-2 top-2" 
              onClick={() => {copyLink()}}
              >Copy</button>
            <p className="py-4 text-white">{`${import.meta.env.VITE_FRONTEND_URL}/ask/${askData.Id}`}</p>
          </div>
          <p className="py-4">You can <b>try if it works</b></p>
        </> : <>
          <h3 className="font-bold text-3xl">Only one step</h3>
          <p className="py-4">Enter their name and your personalised message that asks them whatever you'd like to ask...</p>
          <p className="font-bold">They have to be able to answer to the question/message with YES or NO</p>
          <div className="modal-action flex flex-col">
            <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-2 w-full">
              <input type="text" placeholder="Their name" id="name" name="name" className="input input-bordered w-full" required/>
              <input type="text" placeholder="Your message/question" id="message" name="message" className="input input-bordered w-full" required/>
              <input type="submit" value="Complete" className="btn btn-primary"/>
            </form>
          </div>
        </>
        }
      </div>
      {showCopyToast &&
        <div className="toast toast-center animate-pulse">
          <div className="alert alert-success">
            <span>Link copied!</span>
          </div>
        </div>
      }
    </dialog>
    </>
  );
}

export default LandingPage;
