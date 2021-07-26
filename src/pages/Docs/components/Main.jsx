import React from "react";
import Code from "./Code/Code";

const Main = () => {
  return (
    <main className='px-5'>
      <section className='introduction'>
        <p className='title'>Introduction</p>
        <p>
          The base URL for the project is{" "}
          <a href='https://goal-manager-api.herokuapp.com/api' target='_blank'>
            https://goal-manager-api.herokuapp.com/api
          </a>
          . When a user logs in, he is given a random token that you’ll store to
          be sent as an Authorization header.
        </p>
      </section>
      <section className='endpoints mt-4'>
        <p className='title'>Endpoints/Routes</p>
        <p>There are 8 different endpoints in the API.</p>
        <div className='endpoint'>
          <p className='endpoint-title'>1. /signup</p>
          <div className='endpoint-main'>
            <div className='group'>
              <p className='group-title'>Request type:</p>
              <p>POST</p>
            </div>
            <div className='group'>
              <p className='group-title'>Authorization:</p>
              <p>None</p>
            </div>
            <div className='group'>
              <p className='group-title'>Parameters:</p>
              <Code>&#123;name, email, password&#125;</Code>
              <p>All the parameters are required.</p>
            </div>
            <div className='group'>
              <p className='group-title'>Response:</p>
              <Code>&#123;user, message&#125;</Code>
              <p>
                It responds with the user object just created and a success
                message.
              </p>
            </div>
          </div>
        </div>
        <div className='endpoint'>
          <p className='endpoint-title'>2. /login</p>
          <div className='endpoint-main'>
            <div className='group'>
              <p className='group-title'>Request type:</p>
              <p>POST</p>
            </div>
            <div className='group'>
              <p className='group-title'>Authorization:</p>
              <p>None</p>
            </div>
            <div className='group'>
              <p className='group-title'>Parameters:</p>
              <Code>&#123;email, password&#125;</Code>
              <p>All the parameters are required.</p>
            </div>
            <div className='group'>
              <p className='group-title'>Response:</p>
              <Code>&#123;token, token_type&#125;</Code>
              <p>
                If login is successful, it responds with a bearer token which
                you'll send as authorization header to the other pages that
                require authorization.
              </p>
            </div>
          </div>
        </div>
        <div className='endpoint'>
          <p className='endpoint-title'>3. /profile</p>
          <div className='endpoint-main'>
            <div className='group'>
              <p className='group-title'>Request type:</p>
              <p>GET</p>
            </div>
            <div className='group'>
              <p className='group-title'>Authorization:</p>
              <p>Bearer Token</p>
            </div>
            <div className='group'>
              <p className='group-title'>Parameters:</p>
              None
            </div>
            <div className='group'>
              <p className='group-title'>Response:</p>
              <Code>&#123;user&#125;</Code>
              <p>
                If authorized, it responds with the user profile which contains
                the user's name, email and id.
              </p>
            </div>
          </div>
        </div>
        <div className='endpoint'>
          <p className='endpoint-title'>4. /goals</p>
          <div className='endpoint-main'>
            <div className='group'>
              <p className='group-title'>Request type:</p>
              <p>GET</p>
            </div>
            <div className='group'>
              <p className='group-title'>Authorization:</p>
              <p>Bearer Token</p>
            </div>
            <div className='group'>
              <p className='group-title'>Parameters:</p>
              None
            </div>
            <div className='group'>
              <p className='group-title'>Response:</p>
              <Code>&#123;goals&#125;</Code>
              <p>
                If authorized, it responds with the user's goals, which is an
                array of goal objects. Each goal object from the database has
                four properties. A name, id, the user's id, and the steps. The
                steps are stored as a JSON string. Get more info about the
                structure of the goals database table{" "}
                <a href='https://wa.me/2348145049272' target='_blank'>
                  here.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='endpoint'>
          <p className='endpoint-title'>5. /insert</p>
          <div className='endpoint-main'>
            <div className='group'>
              <p className='group-title'>Request type:</p>
              <p>POST</p>
            </div>
            <div className='group'>
              <p className='group-title'>Authorization:</p>
              <p>Bearer Token</p>
            </div>
            <div className='group'>
              <p className='group-title'>Parameters:</p>
              <Code>&#123;name, description, deadline, steps&#125;</Code>
              <p>
                Only the goal name is required. The steps are a JSON string.
              </p>
            </div>
            <div className='group'>
              <p className='group-title'>Response:</p>
              <Code>&#123;id&#125;</Code>
              <p>It responds with the id of the goal inserted.</p>
            </div>
          </div>
        </div>
        <div className='endpoint'>
          <p className='endpoint-title'>6. /delete</p>
          <div className='endpoint-main'>
            <div className='group'>
              <p className='group-title'>Request type:</p>
              <p>POST</p>
            </div>
            <div className='group'>
              <p className='group-title'>Authorization:</p>
              <p>Bearer Token</p>
            </div>
            <div className='group'>
              <p className='group-title'>Parameters:</p>
              <Code>&#123;goal_id&#125;</Code>
              <p>Required, obviously🤦‍♂️.</p>
            </div>
            <div className='group'>
              <p className='group-title'>Response:</p>
              <Code>"Deleted"</Code>
            </div>
          </div>
        </div>
        <div className='endpoint'>
          <p className='endpoint-title'>7. /update-steps</p>
          <div className='endpoint-main'>
            <div className='group'>
              <p className='group-title'>Request type:</p>
              <p>POST</p>
            </div>
            <div className='group'>
              <p className='group-title'>Authorization:</p>
              <p>Bearer Token</p>
            </div>
            <div className='group'>
              <p className='group-title'>Parameters:</p>
              <Code>&#123;goal_id, steps&#125;</Code>
              <p>All required.</p>
            </div>
            <div className='group'>
              <p className='group-title'>Response:</p>
              <Code>"Updated"</Code>
              <p>
                Most times you'll only want to update the steps in the goal, so
                that's what this is for.
              </p>
            </div>
          </div>
        </div>
        <div className='endpoint'>
          <p className='endpoint-title'>8. /edit</p>
          <div className='endpoint-main'>
            <div className='group'>
              <p className='group-title'>Request type:</p>
              <p>POST</p>
            </div>
            <div className='group'>
              <p className='group-title'>Authorization:</p>
              <p>Bearer Token</p>
            </div>
            <div className='group'>
              <p className='group-title'>Parameters:</p>
              <Code>&#123;name, description, deadline, steps, id&#125;</Code>
              <p>Only the goal name and goal id are required.</p>
            </div>
            <div className='group'>
              <p className='group-title'>Response:</p>
              <Code>"Edited"</Code>
              <p>To edit the goal completely, not just the steps</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
