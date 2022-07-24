import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer class="footer footer-center p-4 bg-slate-800 text-white ">
                <div>
                    <p>Copyright &copy; {new Date().getFullYear()} - All right reserved by rkbokul</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;