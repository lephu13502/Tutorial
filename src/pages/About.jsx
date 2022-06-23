function About() {
    return (
        <div>
            <h1 className="text-6xl mb-4">Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. This
                project is part of the
                <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
                    {' '}
                    React Front To Back
                </a>{' '}
                Udemy course.
            </p>
            <p className='text-lg text-gray-400'>
                This tutorial was learnt and coded again by <span className='text-white'>Phu. MSSV: 20127275</span>
            </p>
        </div>
    )
}

export default About
