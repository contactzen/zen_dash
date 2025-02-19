import asyncio

from pydantic import BaseModel
from pages.chart_page.row_eight.view import HighchartStock
from zen_dash.objects import instances as i
from zen_dash import page as p
from zen_dash import Zen
from zen_dash.support.encoder import JsonEncoder
import random
import json
import time
from fastapi.websockets import WebSocket

prefix = "/backend/box_page/row_one"

class BoxInput(BaseModel):
    page: str

class FirstBox(Zen):
    @staticmethod
    def full_url() -> str:
        return f"{prefix}/first_box"

    @staticmethod
    def url() -> str:
        return "/first_box"

    @staticmethod
    async def view(b: BoxInput):
        await asyncio.sleep(10)
        dialog_data = i.DialogBox(
            url=FirstBoxDialog.full_url(), height="70%", width="70%")
        import random
        name = random.choice(["Users", "Spent"])
        Value = random.choice(["5009", "200"])
        return i.ReturnData(type=i.InstanceType.BOX,
                            box_data=i.BoxData(
                                icon="person", 
                                name=name, 
                                value=Value),
                            footer="5% increase compare to last week ",
                            tooltip_data=i.ToolTipData(
                                label="my label", disable=False),
                            dialog_data=dialog_data,
                            )

class FirstBoxDialog(Zen):
    @staticmethod
    def full_url() -> str:
        return f"{prefix}/first_box_dialog"

    @staticmethod
    def url() -> str:
        return '/first_box_dialog'

    @staticmethod
    async def view(b: BoxInput):
        return p.Page(
            rows=[
                p.Row(data=[
                    p.Instance(url=HighchartStock.full_url())])])


class SecondBox(Zen):
    @staticmethod
    def full_url() -> str:
        return f"{prefix}/second_box"

    @staticmethod
    def url() -> str:
        return "/second_box"

    @staticmethod
    async def view(b:BoxInput):
        return i.ReturnData(type=i.InstanceType.BOX,
                            box_data=i.BoxData(
                                icon="percent", name="User Spent", value="$5000"),
                            footer="10% increase compare to last week ")


class ThirdBox(Zen):
    @staticmethod
    def full_url() -> str:
        return f"{prefix}/third_box"

    @staticmethod
    def url() -> str:
        return "/third_box"

    @staticmethod
    async def view(b:BoxInput):
        return i.ReturnData(type=i.InstanceType.BOX, box_data=i.BoxData(icon="attach_money", name="User Spent (last hour)", value="$400"))


class ForthBox(Zen):
    @staticmethod
    def full_url() -> str:
        return f"{prefix}/forth_box"

    @staticmethod
    def url() -> str:
        return '/forth_box'

    @staticmethod
    async def view(b:BoxInput):
        return i.ReturnData(type=i.InstanceType.BOX, box_data=i.BoxData(icon="attach_money", name="User Spent Total", value="$2000"))
