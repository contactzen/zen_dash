import time
from typing import List
from fastapi import UploadFile

from fastapi.responses import FileResponse

from zen_dash.objects import instances as i
from zen_dash import Zen
prefix = "/backend/input_page/row_seven"


class Input(Zen):
    @staticmethod
    def full_url() -> str:
        return f"{prefix}/input"

    @staticmethod
    def url() -> str:
        return "/input"

    @staticmethod
    def view():
        return i.ReturnData(type=i.InstanceType.INPUT,
                            title="Input",
                            input_data=i.InputData(
                                label="Input Data", name="myInput", value='test')
                            )


class FileDownload(Zen):
    @staticmethod
    def full_url() -> str:
        return f"{prefix}/file_download"

    @staticmethod
    def url() -> str:
        return "/file_download"

    @staticmethod
    def view():
        return i.ReturnData(type=i.InstanceType.DOWNLOAD,
                            title="Download Option",
                            download_data=i.DownloadData(
                                url=FileDownload.server_full_url(), name="download", label="Report")
                            )

    @staticmethod
    def server_full_url() -> str:
        return f"{prefix}/download_data"

    @staticmethod
    def server_url() -> str:
        return "/download_data"

    @staticmethod
    def server():

        time.sleep(2)
        file_path = "files/Home - ZenReportz.pdf"
        from datetime import datetime
        file_name = datetime.now().strftime("%Y%m%d-%H:%M:%S_") + "test.pdf"
        return FileResponse(path=file_path, filename=file_name)


class UploadData(Zen):
    @staticmethod
    def full_url() -> str:
        return f"{prefix}/upload"

    @staticmethod
    def url() -> str:
        return "/upload"

    @staticmethod
    def view():
        return i.ReturnData(type=i.InstanceType.UPLOAD, title="upload file",
                            upload_data=i.UploadData(
                                url=UploadData.server_full_url(), multi=True, name="download_data")
                            )

    @staticmethod
    def server_full_url() -> str:
        return f"{prefix}/upload_data"

    @staticmethod
    def server_url() -> str:
        return "/upload_data"

    @staticmethod
    async def server(files: List[UploadFile]) -> str:
        import time
        time.sleep(2)
        t = {"filenames": [file.filename for file in files]}
        for file_ in files:
            dd = file_.filename.split("/")[-1]
            with open(f"files/{dd}", "wb") as f:
                content = await file_.read()  # async read
                f.write(content)  # async write

        return t


class Button(Zen):

    @staticmethod
    def full_url() -> str:
        return f"{prefix}/button"

    @staticmethod
    def url() -> str:
        return "/button"

    @staticmethod
    def view():
        return i.ReturnData(
            title="button data",
            type=i.InstanceType.BUTTON,
            button_data=i.ButtonData(
                url=Button.server_full_url(), name="test")
        )

    @staticmethod
    def server_full_url() -> str:
        return f"{prefix}/button_result"

    @staticmethod
    def server_url() -> str:
        return "/button_result"

    @staticmethod
    def server() -> str:
        return i.UpdateReturnData(
            title="button data",
            type=i.UpdateInstanceType.BUTTON_RESULT,
            button_result="My Result"
        )