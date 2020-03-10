import React, {useEffect, useState} from "react";
import { HeaderText, LoadingSpinner, Project } from "components/components";
import styled from "styled-components";
import Aux from "hoc/Aux/Aux";
import projectsList from "./projectsList";

const Projects = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    },[]);

    return(
        <ProjectPageContainer>
            {isLoading ?
                <LoadingSpinner isLoading={isLoading}/> :
                <Aux>
                    <HeaderText>Projects</HeaderText>
                    <ProjectsContainer>
                        {projectsList.map((project, i) =>
                            <Project 
                                key={i} 
                                title={project.title} 
                                image={project.image} 
                                description={project.description} 
                                repoLink={project.repoLink}
                            />)}
                    </ProjectsContainer>
                </Aux>}
        </ProjectPageContainer>
    );
};

const ProjectPageContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    margin : 0 auto;
    width : 100%;
    height : 100%;
`;

const ProjectsContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    width : 100%;
    max-width : 800px;
    @media(max-width : 850px){
        flex-direction : column;
    }
`;

export default Projects;