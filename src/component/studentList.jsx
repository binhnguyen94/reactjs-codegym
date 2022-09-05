export default function StudentList() {
    const students = [
        {
            company: 'Alfreds Futterkiste',
            contact: 'Maria Anders',
            country: 'Germany'
        },
        {
            company: 'Centro comercial Moctezuma',
            contact: 'Francisco Chang',
            country: 'Mexico'
        },
        {
            company: 'Ernst Handel',
            contact: 'Roland Mendel',
            country: 'Austria'
        },
        {
            company: 'Island Trading',
            contact: 'Helen Bennett',
            country: 'UK'
        },
        {
            company: 'Laughing Bacchus Winecellars',
            contact: 'Yoshi Tannamuri',
            country: 'Canada'
        },
        {
            company: 'Magazzini Alimentari Riuniti',
            contact: 'Giovanni Rovelli',
            country: 'Italy'
        }
    ];

    return (
        <div className="container">
            <h1>Student</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => (
                            <tr key={index}>
                                <th>{student.company}</th>
                                <th>{student.contact}</th>
                                <th>{student.country}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}