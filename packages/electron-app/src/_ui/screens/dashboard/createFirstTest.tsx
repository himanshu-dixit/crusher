import { goFullScreen } from "electron-app/src/ui/commands/perform";
import { CreateIcon, PlayV2Icon } from "electron-app/src/ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { shell } from "electron";
import { Link } from "../../components/Link";
import { ActionButton } from "electron-app/src/ui/components/buttons/action.button";

const CreateFirstTest = ({}) => {
	const navigate = useNavigate();

	const handleCreateTest = React.useCallback(() => {
		navigate("/recorder");
		goFullScreen();
	}, []);

	const handleOpenHelpVideo = React.useCallback(() => {
		shell.openExternal("https://docs.crusher.dev/getting-started/create-your-first-test#watch-video");
	}, []);

	return (
		<div css={containerCss}>
			<div css={contentCss}>
				<CreateIcon css={createIconCss} />
				<div css={contentHeadingCss}>Create your first test</div>
				<div css={contentDescriptionCss}>Start with low-code browser to create a test</div>
			</div>
			<DocsGoBackActionBar buttonTitle={"Create"} buttonCallback={handleCreateTest} />

			<div css={watchCss} onClick={handleOpenHelpVideo}>
				<PlayV2Icon /> Watch video
			</div>
		</div>
	);
};

const DocsGoBackActionBar = ({ buttonTitle, buttonCallback }) => {
	const openDocs = React.useCallback(() => {
		shell.openExternal("https://docs.crusher.dev");
	}, []);

	return (
		<div css={actionsContainerCss}>
			<Link onClick={openDocs}>Docs</Link>
			<ActionButton title={buttonTitle} onClick={buttonCallback} css={actionButtonCss} />
		</div>
	);
};

/* ======== DocsGoBackActionBar.styles ======== */
const actionsContainerCss  = css`
    display: flex;
    margin-top: 20rem;
    justify-content: center;
    align-items: center;
`;
const actionButtonCss = css`
    margin-left: 12rem;
`;

/* ======== CreateFirstTest.styles ======== */
const containerCss = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-top: -2rem;
`;
const contentCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const createIconCss = css`
	width: 28rem;
	height: 28rem;
`;
const contentHeadingCss = css`
	margin-top: 28rem;
	font-family: Cera Pro;
	font-style: normal;
	font-weight: 900;
	font-size: 18rem;
	text-align: center;
	letter-spacing: 0.1px;
	color: #ffffff;
`;
const contentDescriptionCss = css`
	margin-top: 10rem;

	font-family: Gilroy;
	font-style: normal;
	font-weight: 400;
	font-size: 14rem;
	text-align: center;
	letter-spacing: 0.2px;
	color: rgba(255, 255, 255, 0.64);
`;
const watchCss = css`
	font-size: 14rem;
	display: flex;
	align-items: center;

	column-gap: 8rem;
	align-self: center !important;
	justify-self: end;

	margin-top: 100rem;

	:hover {
		color: #a966ff;
		text-decoration: underline;
		cursor: pointer;
	}
`;

export { CreateFirstTest };