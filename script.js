// TODO: add code here

window.addEventListener("load", function() {
    // console.log('window loaded');

    // With .then()

    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(
        function(response) {
            response.json().then(function(astronauts) {
                // console.log(astronauts);
                // console.log(astronauts.length);
                // console.log(astronauts[0]);
                // console.log(astronauts[0].hoursInSpace);

                const container = document.getElementById('container');
                // console.log(container);
                container.innerHTML = '';


                // Bonus Mission

                // 1. Display the astronauts sorted from most to least time in space.
                // a and b are object elements of your array
                // Sorting an array of objects by property values

                astronauts.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

                // 3. Add a count of astronauts to the page.
                let count = 0;

                astronauts.forEach(astronaut => {

                    // console.log(astronaut);
                    // console.log(astronaut.skills);
                    // console.log(astronaut.active);

                    count++;

                    let skillsArr = [];
                    astronaut.skills.forEach(skill => skillsArr.push(` ${skill}`));
                    // console.log(skillsArr)

                    const astro = document.createElement('div');

                    astro.style.cssText = `
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    `;

                    astro.innerHTML = `
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                    <li>Active: ${astronaut.active}</li>
                                    <li>Skills: ${skillsArr}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${astronaut.picture}">
                        </div>
                    `;

                    container.appendChild(astro);

                    // 2. Make the "Active: true" text green, for astronauts that are still active (active is true).

                    if (astronaut.active === true) {
                        
                        astro.innerHTML = `
                            <div class="astronaut">
                                <div class="bio">
                                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                        <li style="color: green">Active: ${astronaut.active}</li>
                                        <li>Skills: ${skillsArr}</li>
                                    </ul>
                                </div>
                                <img class="avatar" src="${astronaut.picture}">
                            </div>
                        `;
                    }
                });

                let p = document.createElement('p');
                p.innerHTML = `Number of Astronauts: ${count}`;
                p.style.cssText = `text-align: center`;
                container.appendChild(p);
            });
        });
    






    // With async and await

    // getAstronauts();

    // async function getAstronauts() {

    //     const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
    //     const astronauts = await response.json();
    //     // console.log(astronauts);

    //     const container = document.getElementById('container');
    //     container.innerHTML = '';

    //     for (let astronaut of astronauts) {
    //         // console.log(astronaut);
    //         // console.log(astronaut.skills);
    //         // console.log(typeof astronaut.skills);

    //         let skillsArr = [];
    //         for (let skill of astronaut.skills) {
    //             skillsArr.push(` ${skill}`);
    //         }
    //         // console.log(skillsArr);
    //         // console.log(typeof skillsArr);

    //         const astronautDiv = document.createElement('div');
    //         astronautDiv.classList.add('astronaut');
    
    //         astronautDiv.innerHTML = `
    //             <div class="bio">
    //                 <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
    //                 <ul>
    //                     <li>Hours in space: ${astronaut.hoursInSpace}</li>
    //                     <li>Active: ${astronaut.active}</li>
    //                     <li>Skills: ${skillsArr}</li>
    //                 </ul>
    //             </div>
    //             <img class="avatar" src="${astronaut.picture}">
    //         `;
    
    //         container.appendChild(astronautDiv);
    //     }
    // }
})

// Helper 

// const skills = ['Information Systems','Shuttle Pilot','Fighter Pilot','Helicopter Pilot','Colonel USAF'];
// console.log(skills);
// let skillsArr = [];
// for (let skill of skills) {
//     skillsArr.push(skill);
// }
// console.log(skillsArr);