import React from "react";

const SkillGrid = () => {
  const skills_1 = [
    "JavaScript",
    "Python",
    "Java",
    "JavaFX",
    "pandas",
    "HTML/CSS",
  ];
  const skills_2 = [
    "React",
    "NextJS",
    "AstroJS",
    "ThreeJS",
    "Node.js",
    "TailwindCSS",
    "SCSS",
  ];
  const skills_3 = ["MongoDB", "Supabase", "MySQL", "Appwrite", "Github"];

  // Function to arrange skills with the middle element longest and mid-1 and mid+1 shorter, and so on
  const arrangeSkills = (skills) => {
    const sortedSkills = [...skills].sort((a, b) => b.length - a.length);

    const middle = Math.floor(sortedSkills.length / 2);
    const left = sortedSkills.slice(0, middle);
    const right = sortedSkills.slice(middle + 1);

    const arrangedSkills = [sortedSkills[middle]];

    for (let i = 0; i < left.length; i++) {
      if (i % 2 === 0) {
        arrangedSkills.unshift(left[i]);
      } else {
        arrangedSkills.push(left[i]);
      }
      if (i < right.length) {
        if (i % 2 === 0) {
          arrangedSkills.push(right[i]);
        } else {
          arrangedSkills.unshift(right[i]);
        }
      }
    }

    return arrangedSkills;
  };

  const arrangedSkills_1 = arrangeSkills(skills_1);
  const arrangedSkills_2 = arrangeSkills(skills_2);
  const arrangedSkills_3 = arrangeSkills(skills_3);

  return (
    <div className="flex md:items-center justify-center md:flex-col gap-4 cursor-default mb-20">
      <div className="flex flex-wrap gap-4">
        {arrangedSkills_1.map((skill_1, index) => (
          <div
            key={index}
            className="px-4 py-1 text-lightText dark:text-darkText text-center bg-lightSecondary dark:bg-darkUtility rounded-sm mb-2" // Add margin-bottom for spacing
            style={{
              maxHeight: "32px",
              opacity: calculateOpacity(
                index,
                0.9,
                0.5,
                arrangedSkills_1.length
              ),
            }}
          >
            <p className="font-semibold font-mono">{skill_1}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 md:flex gap-4">
        {arrangedSkills_2.map((skill_2, index) => (
          <div
            key={index}
            className="px-4 py-1 text-lightText dark:text-darkText text-center bg-lightSecondary dark:bg-darkUtility rounded-sm mb-2" // Add margin-bottom for spacing
            style={{
              maxHeight: "32px",
              opacity: calculateOpacity(
                index,
                0.9,
                0.6,
                arrangedSkills_2.length
              ),
            }}
          >
            <p className="font-semibold font-mono">{skill_2}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 md:flex gap-4">
        {arrangedSkills_3.map((skill_3, index) => (
          <div
            key={index}
            className="px-4 py-1 text-lightText dark:text-darkText text-center bg-lightSecondary dark:bg-darkUtility rounded-sm mb-2" // Add margin-bottom for spacing
            style={{
              maxHeight: "32px",
              opacity: calculateOpacity(
                index,
                0.9,
                0.5,
                arrangedSkills_3.length
              ),
            }}
          >
            <p className="font-semibold font-mono">{skill_3}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Calculate the opacity based on the index and center index
const calculateOpacity = (index, maxOpacity, minOpacity, totalSkills) => {
  const centerIndex = totalSkills / 2 - 0.5;
  const distanceFromCenter = Math.abs(index - centerIndex);
  //   console.log(index + ":" + distanceFromCenter);
  // Linear interpolation between maxOpacity and minOpacity
  return (
    maxOpacity - (distanceFromCenter * (maxOpacity - minOpacity)) / centerIndex
  );
};

export default SkillGrid;
