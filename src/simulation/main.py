# The engine is a simple 3 stage process. Each of the 3 stages look like this
#   1. Calculate ratings.
#   2. Loop:
#      - Select Event
#      - Simulate Events
#   3. Find rating deltas
#
#   Then there is a 4th stage, where Game Ending events are tried until a team wins.

import collections
import enum
import random

class Ratings(collections.namedtuple('Ratings', 'top jungle mid bot vision objectives')):
  @staticmethod
  def ZEROES():
    return Ratings(0, 0, 0, 0, 0, 0)
  
  @staticmethod
  def RANDOM():
    return Ratings(random.random(), random.random(), random.random(), random.random(), random.random(), random.random())

  def __add__(self, other):
    return Ratings(self[i] + other[i] for i in len(self))

class Stage(enum.Enum):
  ChampSelect = 0
  Early = 1
  Middle = 2
  Late = 3
  Ending = 4

class Event:
  """
  Right now these are classes with methods, but they should either be just data, or
  able to be created with just data. That way, we can easily define and iterate
  on events.
  """
  def is_end_of_stage(self):
    return True

  def event(self):
    return None
  
  def chance_to_occur(self, home, away):
    """ Given home and away ratings, the chance this event happens. """
    return 0.4
  
  def choose_winner(self, home, away):
    """ Given home and away ratings, choose who wins the event.
    returns: Optional[Rating]
    """
    return None
  
  def reward(self):
    """ Return a Ratings that describes the delta to apply to the next stage. """
    return Ratings.ZEROES()

class EventBag:
  # Stateful? chosen events and results influence chosen events.
  def stage(self):
    return 0

  def choose_event(self, home, away) -> Event:
    return Event()
  
  def run_event(self, event: Event, home, away):
    return None

def simulate_stage(home, away, event_bag):
  home_delta = Ratings.ZEROES()
  away_delta = Ratings.ZEROES()

  while True:
    event = event_bag.choose_event(home, away)
    if event.is_end_of_stage():
      return
    winner = event_bag.run_event(home, away)

    if winner is home:
      home_delta = home_delta + event.reward()
    elif winner is away:
      away_delta = away_delta + event.reward()
  
  return home_delta, away_delta

def simulate_ending(home, away, event_bag):
  while True:
    event = event_bag.choose_event()
    winner = event.run_event(home, away)
    if winner is not None:
      return winner

def calculate_initial_ratings(home_team, away_team):
  return Ratings.ZEROES, Ratings.ZEROES

def simulate_game(home_team, away_team, bag_by_stage, ending_bag):
  home, away = calculate_initial_ratings(home_team, away_team)
  for bag in bag_by_stage:
    home_delta, away_delta = simulate_stage(home, away, bag)
    home = home + home_delta
    away = away + away_delta
  winner = simulate_ending(home, away, ending_bag)
  if winner is home:
    return home_team
  return away_team
