import React from 'react';
import image from '../../images/mechashik.jpg'

const About = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Md. ASHIKUR RAHMAN</h2>
                <p className='text-xl'><span className='text-secondary'>Email : </span> mechaashik@gmail.com </p>
                <p className='text-xl mt-5 mb-3 bg-secondary p-2 rounded' ><span className='text-accent'>Educational Background </span> </p>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Certification</th>
                                    <th>Institute</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>1</th>
                                    <td>SSC</td>
                                    <td>Railway High School, Ctg</td>
                                    <td>2015</td>
                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>HSC</td>
                                    <td>Dhaka College, Dhaka</td>
                                    <td>2017</td>
                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>BSC</td>
                                    <td>AUST, Dhaka</td>
                                    <td>2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <p className='text-xl mt-5 mb-3 bg-secondary p-2 rounded' ><span className='text-accent'>Technical Skill </span> </p>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Subject</th>
                                    <th>Skill</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>1</th>
                                    <td>HTML, CSS</td>
                                    <td>Expert</td>
                                    <td>2019</td>
                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>Wordpress</td>
                                    <td>Expert</td>
                                    <td>2021</td>
                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>Javascript</td>
                                    <td>Advance</td>
                                    <td>2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <p className='text-xl mt-5 mb-3 bg-secondary p-2 rounded' ><span className='text-accent'>Projects Live Link </span> </p>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>LINK</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>1</th>
                                    <td><a href="https://assignment-11-p-hero.web.app/">Ashik Gym Equipments</a></td>

                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td><a href="https://assignment-10-p-hero.web.app/">Ashik Gym Center
                                    </a></td>

                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td><a href="https://doctors-portal-dd170.web.app/">Doctors Portal</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p><span className='text-secondary'></span></p>

            </div>
        </div>
    );
};

export default About;