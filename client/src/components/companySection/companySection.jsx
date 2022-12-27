import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./companySection.css";
import { FcSearch } from "react-icons/fc";
import { GrNotes } from "react-icons/gr";
import { MdOutlineSpeakerNotes } from "react-icons/md";

const CompanySection = () => {
  const data = [
    {
      logo: "https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg",
      name: "Amazon",
    },
    {
      logo: "data:image/png;base64,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",
      name: "Ebay",
    },
    {
      logo: "https://i.pinimg.com/736x/4b/b7/71/4bb7714d4fafdd4426ef8644fde397fc.jpg",
      name: "FaceBook",
    },
    {
      logo: "data:image/png;base64,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",
      name: "Depop",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      name: "Instagram",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png",
      name: "Whatsapp",
    },
    {
      logo: "https://www.svgrepo.com/show/176749/google-chrome-logo.svg",
      name: "Google",
    },
    {
      logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREQ8QEQ8VEBIQFRAWEA8WDw8VEBIWFRUWFhURFRcYHSggGBomGxUVIjEhJSkrLzoxFx8/ODM4NygwLysBCgoKDg0NDxAPFSsZFRkrKystLSs3Nys3KysrLSsrLS0tKystKysrKzctKystKysrNys3Ky0rKystLS0rLTctLf/AABEIAPcAzAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEcQAAICAQEGAgQKCAMGBwAAAAECAAMRBAUSITFBUWFxE1KBkQYiIzIzQmJygpIUU2OhscHR8BU04UODk6KywkRUVXN0s8P/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREC/9oADAMBAAIRAxEAPwD7jERAREQEREBERAREQEREBERAREq7gAkkADiSTgAdyYFonP8A8Qaz6CvfH61yUq/CcFn8wMeMh9NYeNmpYfZrVa0953m9zCB0YnI0Tbl4rV3ZHrdiGssswysoBBckjO8eGcfFnXgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiYtVqFrRnbkvYZJ6BQOpJwAO5gU1mrWsAkFmY4SteLu3qqP35PAAEngJqDTFyH1GHYYK0DjTX2Jz89vtHtwA6zpaWybbPpXGMZyKk5ipf3EnqfAADIzSC73Hymvc0vNfUWqoLMd1VBZ2PIKoyxPsEDHsv42qvPSqumvyY71jfueudycf4MVt6E2uMPezWsDzXfOVQ/dXdX8M7EoREQEREBERAREQEREBERAREQEREBERATm2H0t+OaabBI6NcwyAfuqQfNx1Wb2pvFaPYxwqKzMfBRk/wmns6opUu/wdsvZ99zvMPIE4HgBAy2tMUM47zBfq0QZLYmRldsTjbRJusTSL9fdfUH1agfiofF2H5VbuJTaG2CoXdTee36Cnk1n229SodW68hxInW+DuyzSrO537rTvW2EcWY/wAAAA6AAdJYOtWmAAOktEShERAREQEREBERAREQEREBETUt2pQp3WvrDeqbE3vdnMDbiaJ2xp+t9Y83AH75safVV2DKWK47q6sP3QM0REDlfCa7d05+29KEdCGsXeH5czm6v4SJjGMHr8bP8p0/hHUWqBVA5R0fcJwGCniuehIzx74nk0tJOKNlqD691zvg/cwQfzCS6NlNo3XHFNZbu31R5k8BNP9Jy+7VjWX8t7idHSftMPpWHqrw4HJE6KbA1OpAGru+T/wDLoPR0eRQcWHgxael2fsyulQqKBjwknI52wthejJuuY23vjfsbGTjkBjgAOgHATvQTNOzatCndN9Yb1fSJve7OZobkTR/xan1z5+jsx78S1e1KGO6L694/V31De48YG5ERAREQEREBERAREw6vUrUu83gAAMsxPJVHUntAyWWBQWYhVAyWJAAHck8po/pdlv0CYX9fYGCnxRODP5ndHHgTFOkawizUAZBBrozmuvHIt0d/HkOnc7jP2gaZ2ah+mZrz6rn5Py9GuFI8wT4zZrAUbqKFA5AAAe4REC2+ZrX6Otzl6kc9CUUsPEHmJniBp/ojJxqtdPssWtrPmGO8PwsBLJtIrwurK/tEzZV7cDeT8QA8ZtSpUH+vWBlpuSxQyMrqeTKQyn2iWCAdAJz7dnVsSxUbx5uMrYfxrhv3yo2ZV9av0nhY9lg91hIgZn2omStYN7DgVrAIB7M5IVT4EgypS9/nOtC9kAez87jdHlunzmwDgAAAAcgOAEoYGu2gp+upvPe1mcZ7hW+KvsAmZX3RhQEHYKAIMgwJNrd5V23hhsMDzBAIPvmvfq0TgW4+qOJms+sc/NTdHdufuEDYXSIv0e9Qf2Rwn/DOUPnjMvXtMpn0pVkHO+v5q/8AupklPvZI4HJE5dmW+cxbw5L7hIrYoQV+KR1H98ZNXHqVOQCDkHkehkzz+i1Br41rledmnA5DrZQO/evrzHHg3dptV1V1YMrAFWByCDyIlReIiAiIgY77lRWdzuqoJY9gJqaKhnb09ow2D6Ks/wCxU9/tnqenIciTWz5a7c/2enKs/ZreDIv4RhvNk7TdsbpAh2zKxEBERAREQEREBESGIAyTgDmekAZRjjieAHXpNK3aOSVqX0h9bkgmI6Ytxtff+wOCCQZLNoDOK1Nh8OCjzMwOLH+e+B6i8PeZsboAwBgdhylGhWBawvIY/j75VplaY2kGNpjMyNKYkVUEggjgRyPWdTZ1m5d6PgDajW2Vfq23gA+Pq+kyxx3RjzJnCt1jlzRpQGuBxbqCA1enPVEHJ7R16A88kETvbB2MNOGJJeyw71ljEl3buxPM8vdNSI68REqEw6zUCqt7DxCKTgczgch4nlM05+0vjvp6fWf0jj7NOGB/4hq98DJoKDXUqtxdstYe7sd5yPDJIHgB2mWSxzIgIiICIiAiIgIlLrVQFmOAOs5T6qy8la/iJ1bqf77CBt6vaKod1Rvv6o7+J/lNYaZ7PjXNw6VjkPP+/bNjS6Rax8UcerHmf6CZ5BjVAowAAOwkGXMoZRjaY2mRpjaRWNpjaZGmNpBjM1NWzsyaeklbbRl7AcGmrJG+OzsQQp6AMeYE3OHEsd1VBZ26Kqglm9wM2vgxpDuNqLFxZqDvleqAgBK/woFX2SwbuyNl16etURQAABwE34iVCIiAnOQ72puPSqqtVPYuzM49y1zozl7PPx9Ye94A8lpqGPeD74G4JMiTAREQEREBNbW61ahx4k8l6n+gmLaO0BWMDi56dB4n+k09Hoix9JbxJ4hT18T4eEgrVQ95Flhwv1V5Z8uw8Z01UAAAYA5AcpaJQkGTKmBBlDLGUMCjTG0u0xtIqjTG0u0xtIMWtr3qinW96qfNWYNaPbWrD2z1Fa4AHacL0eW0I/a22flrdP8AvnfliEREoREQE5Wzf/Ef/Is/6VnVnH2aeOrHq6hv31Vt/wB0DfEmUEtAtEiIEznbV2kKhurxc+5R3Pj4RtjaYpXA42N80dh6xnN2RoS59NZxzxUHr9s/y/vMGfZuhJ+Vs4k8VU/9Tf0nViJQiRBMATKkwTKkwIJlCZJMoTIqGMxsZZjMbGBVjMbSxMoTIN4D5TQnwvHtKg/yM7M4jt8TR2ZwK7gG8nD1AfmsSduaQiIgIiICcfScLtand6bPz1iv/wDKdicewbusPD6eg5PjS4Kj3Wv7jA3AZOZTMnMC+ZqbU2gtCFjxJ4IvrH+neZdRetas7nCqMk/31njRY+uvJOVQf8iZ4AfaP8fASWjc2VpW1Dm63iuev1yOn3Rw/h5emEw01hVCqMAAAAcgB0mTMQXzIzK5jMotmVJkZlSYFiZQmCZQmQSTKEwTKEwqCZQmSTKEyCpMoTJJlSYVu6RPS1XUZ3SwJRvVbo3sYKZ1dn6n0taPjdJGHXqrg4dD4hgR7J5/T3FGVh06dx1E6qWCq0OD8jqSOPRLcADyDgAfeHdpYldOIiVCIiAnI298RtLf+quQN92zNTE+A3978M681NraQXU21Hk6sPHiMQKMMEjtAmps3VG2mqxvnld23sLEJSwDw3lM5fws2x+j1bqnFtuQvdV+s/8AIeJ8IHJ+E+1TfaNNV8ZVbGB9ezl7hy9/hO/sjQimsKOJ5s3rN1Pl0Hh5zgfBDZ2B6dhxYEVjsvJn9vEDwz3nqAZmKy5k5mLMnMoyZkZlMyMwL5kEyuZUmBYmVJkEypMCSZQmQTKkyATKEwTKkwIJlSYJkGRUGbmi1C4aq0b1b5BHbP8ACacQju6TUNWy02tvZ+huOMWjGd1ugsA94GR1C9Geap1I3TXYvpKzzXqOOQVPQg8R4jhib2m15QfGY3VDlaBm2sdrVHEj7YHmBjJ1KjrxKVWKwDKwZWGVYEEEdwRzl5QiIgecSwae/U1ud2t1OoRjnAKALcPDhuNj708IrttDVlmyEPE90qXko8TkDzae8+G+zTdpyyDNlXxlHfA+MntUke2cP4L7OFVIfmdQFsB/Zn6Me4k+0dpmrHcrAAAAAAAAA5AAYCjwAwJfMxAycwMu9JzMWYzAy5kb0x5jMC+ZBMpmRmBcmVJlSZUmBYmVJkEypMCSZUmQTIJkUJkREBERATZ2ccOGJ3VQMzt2UDiTNaX1VfyAqHztY61f7sZa0nwKhl82WIjs/B4k6etmG61m9Yy+qbWNhX2FsTpStSYAHYS02hERAq65BB6zy2lqNb26Q/U3rdP41s3ylf4XOfJwBynq5xfhHo3KpfV9Np236+gbAIZD4MpKnzgaOZOZBsV1S6v6O0ZUHmpBw1bDoykEEeB7SuZlWTMZmPMnMC+YzKZjMC2YzKZkZhV8ypMjMjMgkmQTIzIgMxEQEREBERAvRUXZVHMn3dzNvZyi7VPaPotMDRT4kEemcfiUL/u/Ga+qdqKhuf5jUn0dHXczxa0/dGT2zuj607mydCtFSVKMBQB7pqRG5ERKhERASCM8JMQPK3oNJeyv/ldUw3j0ouPBbPBW4A9junkWMvqaChIPvne2holuratwGDAggjhxnnNn2sjDQ6g5YAjS3MfpUHH0LE87FA4HmQO4JksDMZmTUacrnt+8ecwzKrZjMrEKnMZkRAZiQWkb8Yi0SoaWhSIiAiJKKTwECBN/R6YAGywhVQFnYkBVAGSSfLrL6HRZ/m3QeAmjqn/TbP0ar/LUt8vYOVzqfoweqKRx7kY5A51IjY2Ih1Nrax1Krjc0yEEFKue8QeTMfjH8I+rPRSlVYUBRyEvKhERAREQEREBObtzZKamsqwwRgqwJDKQchlI4gggEEdp0ogeW2dtM740usO7fyp1GAE1A6A9Fs7ryPNeqrt6rZxHED+n+k3tr7Ir1KFLFByOoBnnx+n6PghGrqHKu0t6QDoFtGTj7waBkNTdj7pK0sekL8MK+VuivRupCUuvsO9n3gSW+GSnhVor2PQkUontO+T/yyYusi6Q/6CRrFroAa+1KQfm77DebwVebHwE1Vt2hqOCqmiQ89wb9viPSOMY8lB8ZubO+CNSEvZm2w43rHZndvvM2SfaZcRy/8dozirT6jUdn3FqrPschx+WWG23/APSuHf8ASWz/APX/ADnr6tHWvAIB7Jm9GOw90DxQ2/p+Vuk1Gn7uFWxB7FJc/lnQ0XoL8/o+oS4jiyA4sX7yHivtxPQW6OtuaA+ycTaXwRotwwXdZeKsODKe6kcQfKBDaMjgQRKnSfa/dNM6XaGm4JcNTWMfJ3qbDjwfIfPixbyl6vhW9Yxbs6wH9lZW4Pj8puSYNuvRZPMnwAnRo0IUZchVHE8eg5kmcU/C6x+FGz7Mn9bZWgHj8nv58pRdkarWEHWW/J5BGnQFKeHLeGSXPL5xIyMgCXBfV7SfWn9H0ZKaflbqhkGwdUpPRT6/5fWnodmaBKK1rRQoUAAAYHDpMmk0iVKFQYAmeAiIgIiICIiAiIgIiICQRJiBhfSoeaA+yE0qDkgHskxAyASYiAiIgIiICY2pU81B9kRAlaVHJQPZLxEBERAREQERED//2Q==",
      name: "Apple",
    },
  ];
  return (
    <>
      <div className="company-section">
        <div class="container">
          <h1
            style={{
              fontFamily: "initial",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Top Registered Companies
          </h1>
          <div class="row" style={{ textAlign: "center", padding: "20px 0px" }}>
            {data.map((item) => {
              return (
                <div
                  class="col-sm-3"
                  style={{ marginBottom: "50px", fontFamily: "initial" }}
                >
                      <div style={ { border: "1px solid silver",marginBottom:"23px",padding:"10px" } }>
                    <img src={item.logo} height="100px" width="100px" />
                    <h4>{item.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="feature-section">
        <h1
          style={{
            fontSize: "50px",
            textAlign: "center",
            fontFamily: "initial",
          }}
        >
          Features
        </h1>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div
                style={{
                  border: "1px solid #0162a2",
                  padding: "0px 15px 10px 15px",
                  borderRadius: "20px",
                  fontFamily: "initial",
                  fontSize: "16px",
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "80px",
                    color: "blue",
                    textAlign: "center",
                  }}
                >
                  <FcSearch
                    style={{
                      border: "1px solid #0162a2",
                      borderRadius: "5px",
                      padding: "2px",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "initial",
                    fontSize: "1.6em",
                    fontWeight: "bold",
                    color: "#0162a2",
                    textAlign: "center",
                  }}
                >
                  Online Job
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit porro, possimus, exercitationem quos facilis
                  odit minima commodi quis facilis odit minima facilis odit
                  minima facilis odit minima iste assumenda, tempore pariatur a
                  doloribus obcaecati.
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              {" "}
              <div
                style={{
                  border: "1px solid black",
                  padding: "0px 15px 10px 15px",
                  borderRadius: "20px",
                  fontFamily: "initial",
                  fontSize: "16px",
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "80px",
                    color: "green",
                    textAlign: "center",
                  }}
                >
                  <GrNotes
                    style={{
                      border: "1px solid black",
                      borderRadius: "5px",
                      padding: "2px",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "initial",
                    fontSize: "1.6em",
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Resume Maker
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit porro, possimus, exercitationem quos facilis
                  odit minima commodi quis facilis odit minima facilis odit
                  minima facilis odit minima iste assumenda, tempore pariatur a
                  doloribus obcaecati.
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              {" "}
              <div
                style={{
                  border: "1px solid green",
                  padding: "0px 15px 10px 15px",
                  borderRadius: "20px",
                  fontFamily: "initial",
                  fontSize: "16px",
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "80px",
                    color: "green",
                    textAlign: "center",
                  }}
                >
                  <MdOutlineSpeakerNotes
                    style={{
                      border: "1px solid green",
                      borderRadius: "5px",
                      padding: "2px",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "initial",
                    fontSize: "1.6em",
                    fontWeight: "bold",
                    color: "green",
                    textAlign: "center",
                  }}
                >
                  Content writer
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit porro, possimus, exercitationem quos facilis
                  odit minima commodi quis facilis odit minima facilis odit
                  minima facilis odit minima iste assumenda, tempore pariatur a
                  doloribus obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanySection;
