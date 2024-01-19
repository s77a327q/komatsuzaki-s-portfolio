interface SkillCardProps {
  skill: string;
  experience: string;
  skillLevel: number;
}

export const designSkills: SkillCardProps[] = [
    { skill: "HTML5", experience: "3年", skillLevel: 4 },
    { skill: "CSS3", experience: "3年", skillLevel: 5 },
    { skill: "bootstrap", experience: "1年", skillLevel: 2 },
    { skill: "Material UI", experience: "1.5年", skillLevel: 3 },
]

export const frontendSkills: SkillCardProps[] = [
    { skill: "JavaScript", experience: "3年", skillLevel: 5 },
    { skill: "TypeScript", experience: "1.5年", skillLevel: 3 },
    { skill: "jQuery", experience: "3年", skillLevel: 4 },
    { skill: "React", experience: "1.5年", skillLevel: 3 },
]

export const backendSkills: SkillCardProps[] = [
    { skill: "Java", experience: "3年", skillLevel: 4 },
    { skill: "Python", experience: "2年", skillLevel: 3 },
    { skill: "Spring Boot", experience: "3年", skillLevel: 4 },
    { skill: "Django", experience: "2年", skillLevel: 3 },
]

export const dbSkills: SkillCardProps[] = [
    { skill: "My SQL", experience: "3年", skillLevel: 3 },
    { skill: "Postgre SQL", experience: "1年", skillLevel: 3 },
    { skill: "RDS", experience: "1年", skillLevel: 3 },
    { skill: "Oracle", experience: "0.5年", skillLevel: 1.5 },
]

export const infraSkills: SkillCardProps[] = [
    { skill: "Apache", experience: "3年", skillLevel: 3 },
    { skill: "Tom Cat", experience: "2年", skillLevel: 3 },
    { skill: "Nginx", experience: "3年", skillLevel: 3 },
    { skill: "AWS", experience: "1.5年", skillLevel: 3 },
]

export const otherSkills: SkillCardProps[] = [
    { skill: "Docker", experience: "2年", skillLevel: 4 },
    { skill: "git", experience: "3年", skillLevel: 4 },
    { skill: "slack", experience: "3年", skillLevel: 5 },
    { skill: "Postman", experience: "1年", skillLevel: 3 },
]