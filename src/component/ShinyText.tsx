import './ShinyText.css';

//? this is a component that is used to create a shiny text effect

const ShinyText: React.FC<{ text: string; disabled?: boolean; speed?: number; className?: string }> = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
