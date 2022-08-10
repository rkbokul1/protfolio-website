import React from 'react';
import { toast } from 'react-toastify';

const Message = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)

        toast('Message Sent Successfull!')

    }
    return (
        <div className='min-h-screen flex items-center'>
            <div class="card max-w-sm bg-base-100 shadow-xl mx-auto mt-14">
                <h1 className='text-3xl font-bold text-center'>Message</h1>
                <div class="card-body justify-center">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="email" class="input input-bordered w-full max-w-lg mb-3" />
                        <textarea placeholder='message' class="input input-bordered w-full max-w-lg mb-3" rows="4" cols="50"></textarea>
                        <input className='btn btn-outline' type="submit" placeholder='Submit'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Message;