import enum

class GameState(enum.Enum):
    EARLY = 'early'
    MIDDLE = 'middle'
    LATE = 'late'

class EarlyEvent(enum.Enum):
    WIN_LANE = 0
    DRAGON = 1
    LANE_PRESSURE = 2
    ROAM = 3



