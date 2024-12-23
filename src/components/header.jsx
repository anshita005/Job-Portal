import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';
import { PenBox } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, SignIn } from '@clerk/clerk-react';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

 const[search, setSearch]= useSearchParams();

 useEffect(()=>{
  if(search.get("sign-in")){
    setShowSignIn(true)
  }
 }, [search]);

 const handleOverlayClick=(e)=>{
  if(e.target === e.currentTarget)
    setShowSignIn(false);
  setSearch({})
 };

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="/logo.png" className="h-20 p-5" alt="Logo" />
        </Link>
        <div className="flex items-center space-x-4 mr-5 mb-7">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <Link to="/post-job">
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className="mr-2" />
              Post a job
            </Button>
          </Link>
          <SignedIn>
 
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {/* Sign-In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={handleOverlayClick} >
          <div className="bg-neutral-900 p-6 rounded-lg shadow-lg">
            <SignIn
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/onboarding"
              appearance={{
                baseTheme: 'dark', // Ensures dark mode
              }}
            />
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setShowSignIn(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
