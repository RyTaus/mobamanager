import typing
import enum
import player_pb2

class Role(enum.Enum):
  top = 'top'
  jungle = 'jungle'
  mid = 'mid'
  bottom = 'bottom'
  support = 'support'
