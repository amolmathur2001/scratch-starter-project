import {
    controlCommands,
    motionCommands,
    looksCommands
} from './commandMapping';


const commandParser = async (commands) => {
    for (const cmd of commands) {
        const resp = await commandRunner(cmd);
    }
};



const commandRunner = async (cmd) => {
    if (cmd.cmdID.includes('Control')) return controlCommands(cmd.cmdText);
    if (cmd.cmdID.includes('Events')) return motionCommands(cmd.cmdText);
    if (cmd.cmdID.includes('Looks')) return looksCommands(cmd.cmdText);
    if (cmd.cmdID.includes('Motion')) return motionCommands(cmd.cmdText);
};

export default commandParser;
