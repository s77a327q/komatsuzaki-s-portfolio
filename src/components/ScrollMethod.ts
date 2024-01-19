export const scrollTop = () => {
    const element = document.getElementById("body");
    element!.scrollIntoView({ behavior: "smooth", block: 'start' });
}

export const scrollIntro = () => {
    const element = document.getElementById("introduction");
    element!.scrollIntoView({ behavior: "smooth", block: 'start' });
}

export const scrollSkillSet = () => {
    const element = document.getElementById("skill_set");
    element!.scrollIntoView({ behavior: "smooth", block: 'start' });
}

export const scrollProfile = () => {
    const element = document.getElementById("profile");
    element!.scrollIntoView({ behavior: "smooth", block: 'start' });
}