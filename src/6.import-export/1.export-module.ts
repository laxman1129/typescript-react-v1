/**
 * Export is used to export the module to be imported in another modules
 * 
 * export can be named or default
 */

export default interface DeptModel {
    id: number;
    name?: string;
}

export const addDeptName = (name: string, dept: DeptModel): DeptModel => {
    return {
        ...dept,
        id: Math.random(),
        name: name // if the name of the key and variable for value is same the no need to specify name:name
    }
}