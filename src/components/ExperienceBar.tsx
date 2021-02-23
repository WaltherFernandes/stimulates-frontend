interface ExperienceProps {
    percentage: string;
    master: number;
}

export function ExperienceBar({ percentage, master }: ExperienceProps) {
    let currentValue = master * (Number(percentage) / 100);
    let formatedPercentage = `${percentage}%`
    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{width: formatedPercentage}}></div>
                <span className="currentExperience" style={{left: formatedPercentage}}>{currentValue} xp</span>
            </div>
            <span>{master} xp</span>
        </header>
    );
}