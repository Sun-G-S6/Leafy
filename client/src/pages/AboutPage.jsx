import nitiPic from '../assets/beetlejuice-boxing.png';

export default function AboutPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Realizing that each of us has a problem of throwing away excess produce from our gardens. We developed a platform where others can sell their excess produce
            here instead of throwing it away.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full"  src={nitiPic} alt="Profile" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Nitisuk Tatiyasuntorn</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder/Fullstack Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full"  alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Long Nguyen</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder/Fullstack Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full"  alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Gunraj Singh </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder/Frontend Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full"  alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Yashik Dhanaraj</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder/Frontend Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full"  alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Jackie Medina</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder/Frontend Developer</p>
                </div>
              </div>
        </ul>
      </div>
    </div>
    );
}
