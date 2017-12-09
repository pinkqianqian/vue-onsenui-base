import SourceMaker from 'Utils/sourcemaker'
// 报告查询
import codeCheck from './codeCheck'
import user from './user'
export default new SourceMaker({
    codeCheck,
    user
}, 'API')
