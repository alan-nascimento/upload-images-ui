import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
import 'react-circular-progressbar/dist/styles.css';

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://gamepedia.cursecdn.com/wowpedia/thumb/8/80/Bolvar_Lich_King_Cata_Loading.jpg/800px-Bolvar_Lich_King_Cata_Loading.jpg" />
        <div>
          <strong>profile.png</strong>
          <span>
            64kb
            <button type="button" onClick={() => {}}>
              Delete
            </button>
          </span>
        </div>
      </FileInfo>

      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: '#1e2434' },
          }}
          strokeWidth={10}
          percentage={10}
        />

        <a
          href="https://gamepedia.cursecdn.com/wowpedia/thumb/8/80/Bolvar_Lich_King_Cata_Loading.jpg/800px-Bolvar_Lich_King_Cata_Loading.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>

        <MdCheckCircle size={24} color="#78e5d5" />
        <MdError size={24} color="#e57878" />
      </div>
    </li>
  </Container>
);

export default FileList;
