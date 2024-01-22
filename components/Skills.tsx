import { SkillBarProps } from '@/types'

const Skills = ({ skills }: SkillBarProps) => {
  return (
    <div>
      <div className='text-WhiteGray font-semibold uppercase text-sm text-center'>- Skills</div>
      <div className='font-semibold text-3xl mt-4 text-center  text-White'>Expertises</div>
      <div className='mx-16 mt-6 pb-16 flex gap-3 flex-wrap justify-center'>
        {skills.map(Skill => (
          <div className='flex sm:w-auto items-center justify-center gap-1 border text-White py-2 px-2 rounded-lg bg-Blur' key={Skill.name}>
            <Skill.icon className={`text-2xl ${Skill.color}`} />
            <span className='whitespace-nowrap'>{Skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills