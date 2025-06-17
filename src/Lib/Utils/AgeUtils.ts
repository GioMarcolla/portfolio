export const calculateAgeFromBirthdateISO = (birthdate: string): number => {
    const birth = new Date(birthdate + 'T00:00:00Z');
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
};
